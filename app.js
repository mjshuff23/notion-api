import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const listUsersResponse = await notion.users.list({});
//   console.log(listUsersResponse);

const myPage = await notion.databases.query({
  database_id: process.env.DATABASE_ID,
});
// console.log(myPage.results[0].properties.Name.title);

try {
  const response = await notion.pages.create({
    parent: { database_id: process.env.DATABASE_ID },
    properties: {
      title: {
        title: [
          {
            text: {
              content: 'Hello World',
            },
          },
        ],
      },
    },
  });
  console.log(response.properties.Name.title);
  console.log('Entry Added');
} catch (error) {
  console.log(error.body);
}
