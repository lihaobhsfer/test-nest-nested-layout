Demo created following Sam Selikoff's Next Conf talk: [Sam Selikoff: Improving developer and user experience with nested layouts in Next.js](https://www.youtube.com/watch?v=6mQ3M1CUGnk&t=229s&ab_channel=Vercel)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

You'll also need to start a local server. This requires `json-server`:

```bash
npm install -g json-server
```

then you can run the following command to start up the server:

```bash
yarn server
```

Data is stored in the `db.json` file.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Build the app

Run `yarn build` to build the app. You can see the console log of the server that the endpoints are hit at build time.

# Run the built app

Run `yarn start` to run the built app. Notice that no further API hits since the dynamic routes are pre-generated during build time.
