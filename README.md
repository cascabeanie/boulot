# Boulot

Boulot is a web app that helps users search for jobs across the UK using [Reed's API](https://www.reed.co.uk/developers/Jobseeker). It offers filters for location, industry, salary, and job type, making it easy to find roles that match your preferences. With a simple interface, users can explore openings and access application details quickly.

## Demo

[Live Demo](https://boulot.vercel.app/)

## Getting Started

If you want to run this app locally, follow these instructions:

To run the development server:

```bash
npm install

# then

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Getting an API key

Obtain an API key from [here](https://www.reed.co.uk/developers/Jobseeker) to search for jobs.

### Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

```bash
REED_API_KEY="YOUR API KEY GOES HERE WITHOUT THE QUOTES"

BASE_URL=http://localhost:3000
```
