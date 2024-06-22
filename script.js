const cars = [
    {
        company: {
            name: "Honda",
            country: "Japan",
            models: {
                Civic: {
                    year: 2020,
                    details: {
                        color: "Red",
                        type: "Sedan",
                        engine: "V4",
                        price: "$20,000"
                    }
                },
                Accord: {
                    year: 2021,
                    details: {
                        color: "Blue",
                        type: "Sedan",
                        engine: "V6",
                        price: "$25,000"
                    }
                },
                CRV: {
                    year: 2019,
                    details: {
                        color: "Green",
                        type: "SUV",
                        engine: "V4",
                        price: "$27,000"
                    }
                },
                Fit: {
                    year: 2018,
                    details: {
                        color: "Yellow",
                        type: "Hatchback",
                        engine: "V4",
                        price: "$16,000"
                    }
                },
                Pilot: {
                    year: 2022,
                    details: {
                        color: "Black",
                        type: "SUV",
                        engine: "V6",
                        price: "$30,000"
                    }
                }
            }
        }
    },
    {
        company: {
            name: "Suzuki",
            country: "Japan",
            models: {
                Mehran: {
                    year: 2018,
                    details: {
                        color: "White",
                        type: "Hatchback",
                        engine: "V3",
                        price: "$10,000"
                    }
                },
                Alto: {
                    year: 2019,
                    details: {
                        color: "Silver",
                        type: "Hatchback",
                        engine: "V3",
                        price: "$12,000"
                    }
                },
                Swift: {
                    year: 2020,
                    details: {
                        color: "Red",
                        type: "Hatchback",
                        engine: "V4",
                        price: "$14,000"
                    }
                },
                Vitara: {
                    year: 2021,
                    details: {
                        color: "Blue",
                        type: "SUV",
                        engine: "V4",
                        price: "$22,000"
                    }
                },
                Jimny: {
                    year: 2022,
                    details: {
                        color: "Green",
                        type: "SUV",
                        engine: "V4",
                        price: "$18,000"
                    }
                }
            }
        }
    }
];

function updateModels() {
    const companySelect = document.getElementById('companySelect').value;
    const modelSelect = document.getElementById('modelSelect');
    modelSelect.innerHTML = '<option value="">--Select Model--</option>';

    const selectedCompany = cars.find(car => car.company.name === companySelect);

    if (selectedCompany) {
        Object.keys(selectedCompany.company.models).forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }

    document.getElementById('carInfo').style.display = 'none';
}

function displayCarInfo() {
    const companySelect = document.getElementById('companySelect').value;
    const modelSelect = document.getElementById('modelSelect').value;

    const selectedCompany = cars.find(car => car.company.name === companySelect);

    if (selectedCompany && modelSelect) {
        const selectedModel = selectedCompany.company.models[modelSelect];
        const carInfoDiv = document.getElementById('carInfo');
        carInfoDiv.style.display = 'block';
        carInfoDiv.innerHTML = `
            <h2>${companySelect} ${modelSelect}</h2>
            <p>Year: ${selectedModel.year}</p>
            <p>Color: ${selectedModel.details.color}</p>
            <p>Type: ${selectedModel.details.type}</p>
            <p>Engine: ${selectedModel.details.engine}</p>
            <p>Price: ${selectedModel.details.price}</p>
        `;
    } else {
        document.getElementById('carInfo').style.display = 'none';
    }
}
