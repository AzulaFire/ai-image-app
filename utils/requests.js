const apiKey = process.env.LIMEWIRE_API || null;

// Fetch Image based off of text prompt

async function fetchImage(prompt, quality, style, guidance) {
  console.log('API Running');

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
      samples: 4,
      quality: quality,
      guidance_scale: guidance,
      aspect_ratio: '1:1',
      style: style,
    }),
  });

  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
}

export { fetchImage };
