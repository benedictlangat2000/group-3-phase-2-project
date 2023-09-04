import React, { useState } from "react";

const countiesList = [
  { code: "001", name: "Nairobi" },
  { code: "002", name: "Mombasa" },
  { code: "003", name: "Kisumu" },
  { code: "004", name: "Nakuru" },
  { code: "005", name: "Eldoret" },
  { code: "006", name: "Nyeri" },
  { code: "007", name: "Thika" },
  { code: "008", name: "Kakamega" },
  { code: "009", name: "Kisii" },
  { code: "010", name: "Meru" },
  { code: "011", name: "Embu" },
  { code: "012", name: "Kitale" },
  { code: "013", name: "Garissa" },
  { code: "014", name: "Kericho" },
  { code: "015", name: "Machakos" },
  { code: "016", name: "Narok" },
  { code: "017", name: "Kiambu" },
  { code: "018", name: "Bungoma" },
  { code: "019", name: "Kilifi" },
  { code: "020", name: "Kisumu" },
  { code: "021", name: "Kwale" },
  { code: "022", name: "Makueni" },
  { code: "023", name: "Murang'a" },
  { code: "024", name: "Nandi" },
  { code: "025", name: "Nyamira" },
  { code: "026", name: "Nyandarua" },
  { code: "027", name: "Siaya" },
  { code: "028", name: "Taita-Taveta" },
  { code: "029", name: "Tana River" },
  { code: "030", name: "Trans Nzoia" },
  { code: "031", name: "Uasin Gishu" },
  { code: "032", name: "Vihiga" },
  { code: "033", name: "Wajir" },
  { code: "034", name: "West Pokot" },
  { code: "035", name: "Turkana" },
  { code: "036", name: "Homa Bay" },
  { code: "037", name: "Lamu" },
  { code: "038", name: "Mandera" },
  { code: "039", name: "Marsabit" },
  { code: "040", name: "Samburu" },
  { code: "041", name: "Isiolo" },
];

function AddressAndLocationForm({ onNext }) {
  const [formData, setFormData] = useState({
    name: "",
    addressLine: "",
    city: "",
    postalCode: "",
    selectedCounty: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountyChange = (e) => {
    setFormData({ ...formData, selectedCounty: e.target.value });
  };

  const handleNextClick = () => {
    onNext(formData);
  };

  return (
    <div>
      <h2>Delivery Address</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Address Line :</label>
        <input
          type="text"
          name="addressLine"
          value={formData.addressLine}
          onChange={handleInputChange}
        />
        
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <label>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
        />
        <label>Select a County:</label>
        <select
          name="selectedCounty"
          value={formData.selectedCounty}
          onChange={handleCountyChange}
        >
          <option value="">Select a county</option>
          {countiesList.map((county) => (
            <option key={county.code} value={county.code}>
              {county.name}
            </option>
          ))}
        </select>
        {/* <button type="button" onClick={handleNextClick}>
          Next
        </button> */}
      </form>
    </div>
  );
}

export default AddressAndLocationForm;
