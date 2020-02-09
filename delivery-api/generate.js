const quantity = {
    restaurants: 12,
    sections: 6,
    products: 50
};

class SamplesBuilder {
    static Restaurants() {
        return n => ({
            id: n,
            name: `Restaurante ${n}`,
            description: `Descripcion ${n}`
        });
    }

    static Sections() {
        return n => ({
            id: n,
            name: `Seccion ${n}`
        });
    }

    static Products() {
        return n => {
            const sectionId = Math.floor(quantity.sections * Math.random());
            const restaurantId = Math.floor(quantity.restaurants * Math.random());
            const price = Math.floor(100 * Math.random())
    
            return {
                id: n,
                sectionId,
                restaurantId,
                name: `Producto ${n}`,
                price
            };
        };
    }
}

module.exports = function() {
    let faker = require('faker');
    let _ = require('lodash');

    return {
        restaurants: _.times(quantity.restaurants, SamplesBuilder.Restaurants()),
        sections: _.times(quantity.sections, SamplesBuilder.Sections()),
        products: _.times(quantity.products, SamplesBuilder.Products())
    };
}