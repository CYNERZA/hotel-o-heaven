# =============================================================================
# Hotel O Secret Heaven - Production Dockerfile
# =============================================================================
# This Dockerfile creates an optimized production build of the React application
# and serves it using the 'serve' static file server on port 12401.
#
# Build: docker build -t hotel-secret-heaven .
# Run:   docker run -p 12401:12401 hotel-secret-heaven
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Build Stage
# -----------------------------------------------------------------------------
# This stage compiles the React application into static files
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
# This is done first to leverage Docker layer caching
COPY package*.json ./

# Install all dependencies (including devDependencies needed for build)
# Using --legacy-peer-deps to handle peer dependency conflicts
RUN npm install --legacy-peer-deps

# Copy source code and configuration files
COPY . .

# Build the React application for production
# This creates an optimized build in the /app/build directory
# All files from public/ (including images/) are automatically copied to build/
RUN npm run build

# Verify build was successful
RUN ls -la /app/build

# -----------------------------------------------------------------------------
# Stage 2: Production Stage
# -----------------------------------------------------------------------------
# This stage creates a minimal production image with only the built files
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install 'serve' - a lightweight static file server
# Version is pinned for reproducibility
RUN npm install -g serve@14.2.1

# Copy the built application from the builder stage
# This includes all static assets, JS bundles, CSS, and images
COPY --from=builder /app/build ./build

# Copy package.json for reference (metadata only)
COPY --from=builder /app/package.json ./package.json

# Verify the build directory structure
RUN echo "Build directory contents:" && ls -la /app/build

# Expose port 12401 for the application
EXPOSE 12401

# Add healthcheck to ensure the container is responding
# Checks every 30 seconds, with 10s timeout, starting after 5s, max 3 retries
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:12401 || exit 1

# Set environment variable for production
ENV NODE_ENV=production

# Start the application using serve
# -s: Single-page application mode (rewrites all routes to index.html)
# -l: Listen on port 12401
# --no-port-switching: Don't try alternative ports if 12401 is busy
# --no-clipboard: Don't copy URL to clipboard
CMD ["serve", "-s", "build", "-l", "12401", "--no-port-switching", "--no-clipboard"]

# =============================================================================
# Usage Notes:
# =============================================================================
#
# Build the Docker image:
#   docker build -t hotel-secret-heaven .
#
# Run the container:
#   docker run -d -p 12401:12401 --name hotel hotel-secret-heaven
#
# View logs:
#   docker logs hotel
#
# Stop container:
#   docker stop hotel
#
# Remove container:
#   docker rm hotel
#
# Access the application:
#   http://localhost:12401
#
# =============================================================================
