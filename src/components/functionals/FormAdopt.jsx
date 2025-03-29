import { useState } from "react";
import { useSelector} from "react-redux";
import { selectOrigins, selectLifeSpan, selectName, selectFilteredCats, selectCats} from "../../redux/slices/catSlice";
import {Select, SelectItem, Button} from "@heroui/react";
export const PetIcon = (props) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M19.0803 15.7203C18.4903 12.1903 15.1003 9.32031 11.5203 9.32031C7.63028 9.32031 4.21028 12.4703 3.88028 16.3503C3.75028 17.8503 4.23028 19.2703 5.22028 20.3403C6.20028 21.4103 7.58028 22.0003 9.08028 22.0003H13.7603C15.4503 22.0003 16.9303 21.3403 17.9403 20.1503C18.9503 18.9603 19.3503 17.3803 19.0803 15.7203Z"
          fill="currentColor"
        />
        <path
          d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z"
          fill="currentColor"
        />
        <path
          d="M16.94 9.02844C18.2876 9.02844 19.38 7.93601 19.38 6.58844C19.38 5.24086 18.2876 4.14844 16.94 4.14844C15.5924 4.14844 14.5 5.24086 14.5 6.58844C14.5 7.93601 15.5924 9.02844 16.94 9.02844Z"
          fill="currentColor"
        />
        <path
          d="M20.5496 12.9313C21.6266 12.9313 22.4996 12.0582 22.4996 10.9812C22.4996 9.90429 21.6266 9.03125 20.5496 9.03125C19.4727 9.03125 18.5996 9.90429 18.5996 10.9812C18.5996 12.0582 19.4727 12.9313 20.5496 12.9313Z"
          fill="currentColor"
        />
        <path
          d="M3.94 10.9816C5.28757 10.9816 6.38 9.88914 6.38 8.54156C6.38 7.19399 5.28757 6.10156 3.94 6.10156C2.59243 6.10156 1.5 7.19399 1.5 8.54156C1.5 9.88914 2.59243 10.9816 3.94 10.9816Z"
          fill="currentColor"
        />
      </svg>
    );
  };

const FormAdopt = () => {
    const origins = useSelector(selectOrigins);
    const lifeSpans = useSelector(selectLifeSpan);
    const names = useSelector(selectName);
    const temperaments = ['Intelligent', 'Interactive', 'Sensitive', 'Curious', 'Affectionate', 'Active', 'Calm', ];
    
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedLifeSpan, setSelectedLifeSpan] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedTemperaments, setSelectedTemperaments] = useState([]);
    const [results, setResults] = useState([]);

    const cats = useSelector(state => selectCats(state));
    console.log(cats)

    const getFilteredCats = (filters) => {
        return cats.filter(cat => {
            return (
                (!filters.origin || cat.origin === filters.origin) &&
                (!filters.lifeSpan || cat.life_span === filters.lifeSpan) &&
                (!filters.name || cat.name === filters.name) &&
                (!filters.temperaments.length || filters.temperaments.every(temp => cat.temperament.includes(temp)))
            );
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filters = {
            origin: selectedOrigin,
            lifeSpan: selectedLifeSpan,
            name: selectedName,
            temperaments: selectedTemperaments
        };
        console.log(filters)
        setResults(getFilteredCats(filters));
    };
    console.log(results)

  return (
  <>
    <div className="form-adopt">
      <form onSubmit={handleSearch}>
        <h3>ADOPT A KITTEN</h3>
        <Select
            className="max-w-xs"
            label="Favorite origin"
            onSelectionChange={(keys) => setSelectedOrigin(Array.from(keys)[0] || null)}
            placeholder="Select an origin"
            startContent={<PetIcon />}
            >
            {origins.map((origin, index) => (
                <SelectItem key={origin} value={origin}>{origin}</SelectItem>
            ))}
            </Select>
            <Select
            className="max-w-xs"
            label="Life span"
            onSelectionChange={(keys) => setSelectedLifeSpan(Array.from(keys)[0] || null)}
            placeholder="Select a life span"
            startContent={<PetIcon />}
            >
            {lifeSpans.map((lifeSpan, index) => (
                <SelectItem key={lifeSpan} value={lifeSpan}>{lifeSpan}</SelectItem>
            ))}
            </Select>
            <Select
            className="max-w-xs"
            label="Agree"
            onSelectionChange={(keys) => setSelectedName(Array.from(keys)[0] || null)}
            placeholder="Select an agree"
            startContent={<PetIcon />}
            >
            {names.map((name, index) => (
                <SelectItem key={name} value={name}>{name}</SelectItem>
            ))}
            </Select>
            <Select
            className="max-w-xs"
            label="Temperament"
            onSelectionChange={(keys) => setSelectedTemperaments(Array.from(keys))}
            selectionMode="multiple"
            placeholder="Select temperaments"
            startContent={<PetIcon />}
            >
            {temperaments.map((temperament, index) => (
                <SelectItem key={temperament} value={temperament}>{temperament}</SelectItem>
            ))}
            </Select>
            <Button type="submit" className="button" color="primary" variant="solid">Search</Button>
      </form>
    </div>
  </>
  )
};
export default FormAdopt;