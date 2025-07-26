## Quickstart

#### Setup Medusa Backend

```bash
# Clone the repository
git clone https://github.com/ToanDC28/medusa

# Change directory
cd medusa/backend

# Install dependencies
yarn install

# Build packages
yarn build

# Go to backend folder
cd apps/backend

# Clone .env.template
cp .env.template .env

# In the .env file replace user, password, address and port parameters in the DATABASE_URL variable with your values
DATABASE_URL=postgres://[user]:[password]@[address]:[port]/$DB_NAME
# For example:
DATABASE_URL=postgres://postgres:postgres@localhost:5432/$DB_NAME

# Setup database and run migrations
yarn medusa db:create && yarn medusa db:migrate && yarn run seed

# Create admin user
npx medusa user --email <email> --password <password>

# Go to root folder
cd ../..

# Start Mercur backend
yarn dev
```

&nbsp;
#### Setup Medusa StoreFront

```bash

# Change directory
cd medusa/storefront

# Install dependencies
npm install

# Clone .env.template
cp .env.template .env

# After run medusa backend and login with admin account, get publishable key from setting and set it to .env file
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=

# Start Mercur storefront
npm run dev
```
&nbsp;
#### Setup Medusa Vendor panel

```bash

# Change directory
cd medusa/vendor-panel

# Install dependencies
npm install

# Clone .env.template
cp .env.template .env

# Start Mercur storefront
npm run dev
```
## Prerequisites

- Node.js v20+
- PostgreSQL
- Git CLI

# Resources

#### Learn more about Mercur

- [Mercur Website](https://www.mercurjs.com/)
- [Mercur Docs](https://docs.mercurjs.com/introduction)

#### Learn more about Medusa

- [Medusa Website](https://www.medusajs.com/)
- [Medusa Docs](https://docs.medusajs.com/v2)
