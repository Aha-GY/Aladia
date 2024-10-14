
set -e

projects=("nuxt-app/")

root_directory=$PWD


for project in "${projects[@]}"; do

   
    echo "Installing dependencies"
    cd "$root_directory/$project"

    echo "Cleaning up node_modules and cache..."
    rm -rf node_modules
    rm -rf .cache

    npm ci --ignore-scripts
    
    echo "Building $project..."
    npx nuxt build
    cd "$root_directory"
done