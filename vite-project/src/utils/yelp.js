const API_key = import.meta.env.VITE_YELP_API_KEY;

export function search(term, location, sortBy) { 
    return fetch(
        `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
            Authorization: `Bearer ${API_key}`,
            },
        }
        )
        .then((response) => {
            if (response.ok)
                {return response.json()}
            throw new Error('Request failed!');
        })
        .then((jsonResponse) => {
            if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: (business.categories && business.categories[0]) ? business.categories[0].title : "",
                rating: business.rating,
                reviewCount: business.review_count,
            }));
            }
        });
    };
    

