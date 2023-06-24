
const fetchNames = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 
        'mode': 'no-cors'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Unable to fetch data:', error);
  }
};

const pickRandomName = (nameType) => {
  let jsonResponse = fetchNames(`https://www.randomlists.com/data/names-${nameType}.json`);
  console.log(jsonResponse);
}

pickRandomName('male');
