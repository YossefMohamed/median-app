#!/bin/bash

# Run the Prisma migration
npx prisma migrate deploy

# Start your Next.js app
npm run start
