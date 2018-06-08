FROM node:10.4

# Install dependencies
RUN apt-get update && apt-get install -y \
  curl \
  git \
  bzip2 \
  build-essential \
  python \
  gcc \
  make \
  vim \
  net-tools

# Clean up after install
RUN apt-get clean && \
  rm -rf /var/lib/apt/lists/*

RUN npm install -g yarn localtunnel @vue/cli