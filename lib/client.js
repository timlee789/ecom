import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
        projectId: '7uo0um20',
        dataset: 'production',
        apiVersion: '2022-07-10',
        useCdn: true,
        token: 'skibaHUu9m4tFyusf0o7i9iOUD8fogRZlq92dZgqejuekQd3fawSOBjctviEzKr6FFCmhAyQxaFNss4JdOYA2LCIHm1rsK8rMDOXsCpkBQbYTm4N7G6AysSo2Pawh1ATRjWkXGwMEA7dWdv25h9XUEWkNoeir7vIWm7JdD149QQ4ahNWlQ0t'
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);