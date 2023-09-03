



export  async function fetchCars() {

    const headers = {

        'X-RapidAPI-key' :'KJWZZIJSFimshuivMSVGaiYzRomp15f2ukjsnK4kzuUzVlzA',
      
        'X-rapidAPI-Host' : 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' ,  {
        headers : headers,
    });

    const result = await response.json();

    return result;

}