const apiKey = process.env.LIMEWIRE_API || null;

// Fetch Image based off of text prompt

async function run() {
  console.log(`Bearer ${apiKey}`);

  //   const resp = await fetch(`https://api.limewire.com/api/image/generation`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Api-Version': 'v1',
  //       Accept: 'application/json',
  //       Authorization:
  //         'Bearer <apikey>',
  //     },
  //     body: JSON.stringify({
  //       prompt: 'A cute baby sea otter',
  //       aspect_ratio: '1:1',
  //     }),
  //   });

  //   console.log(resp);

  //   if (resp.ok) {
  //     const data = await resp.json();
  //     console.log(data);
  //     return data;
  //   }
}

run();
