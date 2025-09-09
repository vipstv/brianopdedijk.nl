# Use latest Rust-based Zola image
FROM ghcr.io/getzola/zola:latest AS builder

# Set working directory
WORKDIR /site

# Copy site files into container
COPY . .

# Build the static site
RUN zola build

# Use a lightweight web server for serving the static files
FROM nginx:alpine AS runner

# Copy built site from builder
COPY --from=builder /site/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
