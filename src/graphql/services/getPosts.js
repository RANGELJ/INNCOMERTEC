export default (_, { ...data }) => new Promise((resolve, reject) => {
  try {
    console.log(data);
    return resolve([{
      title: 'La Biblia',
      description: 'El gran sueño del ser humano.',
      author: [
        { name: 'BRAYAN ULISSES ARIAS PEREZ', age: 23 },
      ],
    }]);
  } catch (e) {
    return reject(e);
  }
});