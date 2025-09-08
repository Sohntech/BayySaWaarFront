#!/bin/bash

echo "🚀 Starting BAY SA WAAR Backend Server..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the baysawarr directory"
    echo "   Current directory: $(pwd)"
    echo "   Expected: baysawarr/"
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found"
    echo "   Make sure you have configured your environment variables"
    echo ""
fi

# Check if MongoDB is running
echo "🔍 Checking MongoDB connection..."
if ! nc -z localhost 27017 2>/dev/null; then
    echo "❌ MongoDB is not running on localhost:27017"
    echo "   Please start MongoDB first:"
    echo "   brew services start mongodb-community"
    echo "   or"
    echo "   mongod"
    echo ""
    exit 1
fi

echo "✅ MongoDB is running"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the server
echo "🌐 Starting server on port 5005..."
echo "   Frontend should connect to: http://localhost:5005/api"
echo "   Press Ctrl+C to stop the server"
echo ""

npm start
