# Use official Ruby image
FROM ruby:3.1-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /srv/jekyll

# Install Jekyll and Bundler
RUN gem install bundler jekyll

# Copy Gemfile if it exists, otherwise create a basic one
COPY Gemfile* ./
RUN if [ ! -f Gemfile ]; then \
    echo "source 'https://rubygems.org'" > Gemfile && \
    echo "gem 'jekyll', '~> 4.3'" >> Gemfile && \
    echo "gem 'minima', '~> 2.5'" >> Gemfile && \
    echo "group :jekyll_plugins do" >> Gemfile && \
    echo "  gem 'jekyll-feed', '~> 0.12'" >> Gemfile && \
    echo "  gem 'jekyll-seo-tag'" >> Gemfile && \
    echo "end" >> Gemfile; \
    fi

# Install gems
RUN bundle install

# Copy the rest of the site
COPY . .

# Expose port 4001
EXPOSE 4001

# Run Jekyll server
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4001", "--livereload", "--force_polling"]
