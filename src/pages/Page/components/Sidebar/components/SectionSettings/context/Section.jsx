import React, {
  useContext,
  createContext,
  useState,
  useMemo,
} from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { updateSection } from 'store/modules/page/slice';

const SectionContext = createContext();

export default function SectionProvider({ children }) {
  // const dispatch = useDispatch();
  const [data, setData] = useState({});

  const onChange = (value) => {
    console.log('VALUE', value);
    // const newData = { ...data, spaces: value };

    // setData(newData);

    // dispatch(updateSection(newData));
  };

  const state = useMemo(() => ({
    data,
    setData,
    onChange,
  }), [data]);

  return (
    <SectionContext.Provider
      value={state}
    >
      {children}
    </SectionContext.Provider>
  );
}

SectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSection() {
  const { data, setData, onChange } = useContext(SectionContext);
  return { data, setData, onChange };
}
