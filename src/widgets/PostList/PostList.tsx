import { PostCard } from "@/entities/post/ui/PostCard";

const mockPosts = [
  {
    id: 1,
    title: "tempore asperiores dolor",
    body: "Odio est dignissimos et. Eum neque et nobis. Dolor omnis dolorum enim est nam. Est excepturi esse voluptatem aut nemo consectetur praesentium. Neque quos sit.",
  },
  {
    id: 2,
    title: "et quia repellat",
    body: "Consequatur excepturi quis ut autem optio esse nemo enim. Aspernatur est delectus neque laudantium eligendi quod numquam alias libero. Id eum corporis modi animi reiciendis consequatur. Praesentium ut fugit.",
  },
  {
    id: 3,
    title: "voluptatem et est",
    body: "Dolorum ut repellat quas. Possimus aspernatur quisquam ut veniam. Deleniti sit incidunt aperiam nihil debitis velit quam blanditiis. Consectetur est accusantium quam perferendis sapiente velit et. Asperiores et voluptatum dolorum laudantium esse at quisquam. Sunt ut nihil quo alias alias numquam pariatur ut.",
  },
  {
    id: 4,
    title: "et qui voluptatem",
    body: "Libero quia sit et ea. Non voluptatem animi numquam expedita. Cum id ducimus facere velit esse officia necessitatibus.",
  },
  {
    id: 5,
    title: "molestiae libero reprehenderit",
    body: "Dolorem corrupti veniam cumque et laboriosam. Ut velit omnis commodi. Quia delectus enim velit qui culpa explicabo.",
  },
  {
    id: 6,
    title: "tempore vitae quasi",
    body: "Numquam et iure ut necessitatibus totam ratione animi. Est nemo praesentium nemo laboriosam nesciunt reiciendis qui. Occaecati eum exercitationem optio dolores ipsum ducimus voluptate dolores. Voluptatibus ut numquam. Sit aut eos accusamus. Placeat dolorum harum alias quia quia voluptas error nostrum delectus. Voluptatem dignissimos dolorem sit minima recusandae et omnis incidunt. Animi blanditiis dolor veniam quia. Aut ea sint corporis molestiae unde. Excepturi qui voluptas at fugiat dignissimos ut quaerat tenetur. Ab harum possimus ad amet esse ratione recusandae. Sit culpa maiores. Et necessitatibus veritatis quod magni beatae.",
  },
  {
    id: 7,
    title: "iste et sint",
    body: "Eligendi reprehenderit magnam ducimus id et cum. Consectetur saepe commodi ipsum sapiente in in laudantium natus. Ea aut et sit voluptas assumenda qui rerum architecto esse. Soluta aliquid quia optio sint veritatis laboriosam praesentium et. Sequi rerum aliquam eum ratione sed quisquam dolorem. Voluptatem velit ipsum alias et aliquid. Quas voluptatem odio qui consequatur odio iusto quibusdam laborum iure. Earum vel accusantium officia sapiente exercitationem ea consequatur distinctio eius. Nam fuga maxime deleniti asperiores voluptas exercitationem quaerat atque. Corporis nihil illum.",
  },
  {
    id: 8,
    title: "voluptatibus neque debitis",
    body: "Cum iste quae. Quos cumque sunt ut occaecati vel quia est quis ullam. Aut quo harum pariatur dolorum et. Maiores temporibus neque.",
  },
  {
    id: 9,
    title: "aut fuga assumenda",
    body: "Veniam laudantium dignissimos sequi id expedita voluptatibus excepturi deleniti eius. Amet qui iure voluptas quo. Delectus velit culpa consequuntur nesciunt qui aut. Voluptatem est laboriosam officiis voluptatem. Distinctio qui et et facere quas similique aliquid qui. Corporis occaecati quos illo.",
  },
  {
    id: 10,
    title: "debitis alias est",
    body: "Id in et in rerum aut. Molestiae eius ut aut. Laudantium voluptates ab. Consequatur ipsa corporis sunt. Quo minus quos soluta.",
  },
  {
    id: 11,
    title: "saepe cupiditate velit",
    body: "Consequatur sit accusamus quibusdam saepe voluptas. Molestias sequi blanditiis porro qui et non sunt. Similique qui voluptate ut et est. Atque ut non et tenetur.",
  },
  {
    id: 12,
    title: "dicta nihil quo",
    body: "Officia ipsa quis delectus excepturi dolorem temporibus enim. Quia fugit sint modi temporibus et qui esse. Rerum cumque natus saepe. Nostrum quas minima mollitia eius accusamus.",
  },
];

export const PostList = () => {
  return (
    <section>
      {mockPosts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  );
};
