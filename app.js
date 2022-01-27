const { Client } = require('@notionhq/client');

require('dotenv').config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

(async () => {
  const listUsersResponse = await notion.users.list({});
  //   console.log(listUsersResponse);
})();

(async () => {
  const myPage = await notion.databases.query({
    database_id: 'ccdcdced5f774baaac57f2bfdffa296e',
  });
  console.log(myPage);
})();
