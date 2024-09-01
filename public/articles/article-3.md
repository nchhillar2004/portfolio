Hi everyone,

Today, I want to share my experience of working on a full stack web app over the past two months. I built a Q&A web app using Next.js, TypeScript, and MongoDB, and it was quite a journey. I initially thought that combining Next.js with backend development would make creating a full stack app relatively easy. I envisioned a project with features like real-time question-and-answer interactions, posting, commenting, and user profiles. However, the reality turned out to be much more complex.

Here are some of the challenges and lessons I encountered along the way:

- **Real-time Features**: Implementing real-time question-and-answer capabilities was more challenging than I anticipated. It required not just setting up WebSocket connections but also managing them efficiently to handle multiple users simultaneously.

- **User Authentication**: Setting up user authentication involved creating a secure system for user login and registration. I had to manage user sessions, handle password hashing, and ensure data security.

- **Database Structure**: Designing a complex database schema was crucial. I needed to link users to their posts, and then link posts to comments. Additionally, organizing posts with tags and categories added another layer of complexity.
Here's a snapshot of the schema:
```schema

model Posts {
  id             String     @id @default(auto()) @map("_id") @db.ObjectId
  title          String
  body           String
  authorUsername String?
  author         Users?     @relation(fields: [authorId], references: [id])
  authorId       String?    @db.ObjectId
  createdAt      DateTime   @default(now())
  comments       Comments[]
  tagName        String?
  tags           Tags?      @relation(fields: [tagIDs], references: [id])
  tagIDs         String?    @db.ObjectId
  time           String
  likes          Int?
}

model Users {
  id         String      @id @default(auto()) @map("_id") @db.ObjectId
  name       String?
  bio        String?
  username   String      @unique
  email      String      @unique
  password   String?
  role       Role        @default(USER)
  isAdmin    Boolean     @default(false)
  isVerified Boolean     @default(false)
  isBan      Boolean     @default(false)
  isTimeout  Boolean     @default(false)
  image      String
  stars      Int         @default(0)
  address    Address?
  posts      Posts[]
  comments   Comments[]
  questions  Questions[]
  answers    Answers[]
  time       String
  createdAt  DateTime    @default(now())
}

model Comments {
  id             String   @id @default(auto()) @map("_id") @db.ObjectId
  comment        String
  authorUsername String?
  post           Posts    @relation(fields: [postId], references: [id])
  author         Users    @relation(fields: [authorId], references: [id])
  authorId       String   @db.ObjectId
  postId         String   @db.ObjectId
  time           String
  createdAt      DateTime @default(now())
}

model Questions {
  id             String    @id @default(auto()) @map("_id") @db.ObjectId
  title          String
  body           String
  authorUsername String?
  author         Users?    @relation(fields: [authorId], references: [id])
  authorId       String?   @db.ObjectId
  answers        Answers[]
  time           String
  createdAt      DateTime  @default(now())
  likes          Int?
  tagName        String?
  tags           Tags?     @relation(fields: [tagIDs], references: [id])
  tagIDs         String?   @db.ObjectId
}

model Answers {
  id             String    @id @default(auto()) @map("_id") @db.ObjectId
  answer         String
  authorUsername String?
  question       Questions @relation(fields: [questionId], references: [id])
  author         Users?    @relation(fields: [authorId], references: [id])
  authorId       String?   @db.ObjectId
  questionId     String    @db.ObjectId
  time           String
  createdAt      DateTime  @default(now())
  likes          Int?
}

model Tags {
  id   String @id @default(auto()) @map("_id") @db.ObjectId
  name String @unique

  questions Questions[]
  posts     Posts[]
}

type Address {
  street String
  city   String
  state  String
  zip    String
}

enum Role {
  USER
  ADMIN
}

```

- **Fetching Data**: Fetching posts, questions, answers and then individual posts, ques, their answers posed its own set of problems. I had to manage API calls effectively, handle errors gracefully, and ensure data was fetched and displayed correctly. For instance, when displaying the number of posts, I had to include logic to handle singular and plural forms:
```typescript
const res = await fetch(`${SiteConfig.url}/api/getposts`, {
        cache: "no-store",
    });
    const posts: Post[] = await res.json();
    const postsLength = posts.length;
<h1>{`${postsLength==1 ? `${postsLength} Post` : `${postsLength} Posts`}`} </h1>
```
Additionally, there were many small functions like this that I hadn't initially thought of but had to create to handle specific functionalities and display requirements.

- **User Profiles**: Adding functionality to display a user's posts, questions and answers on their profile page was not straightforward. It involved associating posts with the correct user and then efficiently retrieving and displaying this information.

- **Performance Optimization**: As the app grew, performance became a concern. I had to optimize both the frontend and backend to ensure that the app remained responsive and fast, even with a large amount of data.

- **UI/UX Challenges**: Ensuring a smooth and intuitive user experience required frequent adjustments to the UI. Balancing functionality with user experience was an ongoing task.

Despite these challenges, the experience was incredibly rewarding. I learned a great deal about full stack development, from handling real-time data to optimizing performance and managing complex relationships in the database. Every problem I faced provided an opportunity to learn and improve my skills.

Overall, building this web app was an amazing learning experience, and I'm excited to continue exploring and building with these technologies.