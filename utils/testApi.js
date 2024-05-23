const apiKey = process.env.LIMEWIRE_API || null;

// Fetch Image based off of text prompt

async function fetchImage() {
  console.log('API Running');

  let prompt =
    'Generate an image of a Blue magical fairy tale land with a castle centered between trees with fairy lights and flowers';
  let quality = 'MID';
  let style = 'SCIFI';
  let guidance = 40;

  const resp = await fetch('https://api.limewire.com/api/image/generation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Version': 'v1',
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      samples: 1,
      quality: quality,
      guidance_scale: guidance,
      aspect_ratio: '1:1',
      style: style,
    }),
  });

  console.log(resp);

  if (resp.ok) {
    const data = await resp.json();
    console.log(data);
    return data;
  }
}

fetchImage();

// export { fetchImage };
