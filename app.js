import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const listUsersResponse = await notion.users.list({});
//   console.log(listUsersResponse);

const myPage = await notion.databases.query({
  database_id: 'ccdcdced5f774baaac57f2bfdffa296e',
});
console.log(myPage.results[0].properties.Name.title);
