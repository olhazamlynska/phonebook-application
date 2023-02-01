import { nanoid } from 'nanoid';

import {
  Label,
  Input,
  Wrapper,
} from 'components/FilterContacts/FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const FilterContacts = () => {
  const filterId = nanoid();
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label htmlFor={filterId}>
        <Input
          type="text"
          title="Write name to find contact quickly"
          value={filter}
          onChange={e => dispatch(setFilterContacts(e.target.value))}
          id={filterId}
        ></Input>
      </Label>
    </Wrapper>
  );
};
