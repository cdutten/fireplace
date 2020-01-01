const initialState = {
    data: [
        {
            "id": "8500010",
            "name": "Basel SBB",
            "score": 1,
            "coordinate": {
                "type": "WGS84",
                "x": 47.547403,
                "y": 7.589577
            },
            "distance": null,
            "icon": "train"
        },
        {
            "id": "8500090",
            "name": "Basel Bad Bf",
            "score": 3,
            "coordinate": {
                "type": "WGS84",
                "x": 47.568145,
                "y": 7.60731
            },
            "distance": null,
            "icon": "train"
        },
        {
            "id": "8578143",
            "name": "Basel, Bahnhof SBB",
            "score": 1,
            "coordinate": {
                "type": "WGS84",
                "x": 47.548284,
                "y": 7.59031
            },
            "distance": null,
            "icon": "tram"
        },
        {
            "id": "8500073",
            "name": "Basel, Aeschenplatz",
            "score": 5,
            "coordinate": {
                "type": "WGS84",
                "x": 47.5513,
                "y": 7.594862
            },
            "distance": null,
            "icon": "tram"
        },
        {
            "id": "8588780",
            "name": "Basel, Schifflände",
            "score": 2,
            "coordinate": {
                "type": "WGS84",
                "x": 47.559197,
                "y": 7.587166
            },
            "distance": null,
            "icon": "tram"
        },
        {
            "id": "8500237",
            "name": "Basel, Bankverein",
            "score": 1,
            "coordinate": {
                "type": "WGS84",
                "x": 47.553606,
                "y": 7.592265
            },
            "distance": null,
            "icon": "tram"
        },
        {
            "id": "8500897",
            "name": "Basel, Barfüsserplatz",
            "score": 3,
            "coordinate": {
                "type": "WGS84",
                "x": 47.55459,
                "y": 7.589066
            },
            "distance": null,
            "icon": "tram"
        },
        {
            "id": "8588775",
            "name": "Basel, Marktplatz",
            "score": 1,
            "coordinate": {
                "type": "WGS84",
                "x": 47.558108,
                "y": 7.587614
            },
            "distance": null,
            "icon": "tram"
        },
        {
            "id": "8500096",
            "name": "Basel, Dreispitz",
            "score": 1,
            "coordinate": {
                "type": "WGS84",
                "x": 47.537169,
                "y": 7.608832
            },
            "distance": null,
            "icon": "tram"
        },
        {
            "id": "8500898",
            "name": "Basel, Claraplatz",
            "score": 2,
            "coordinate": {
                "type": "WGS84",
                "x": 47.56177,
                "y": 7.59359
            },
            "distance": null,
            "icon": "tram"
        }
    ]
};

const locationsReducer = (state = initialState, action) => {
    return state;
};

export default locationsReducer;