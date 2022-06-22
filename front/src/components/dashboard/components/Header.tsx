import { ChangeEvent, FC } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
} from '@chakra-ui/react'

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeView: (event: ChangeEvent<HTMLSelectElement>) => void
  view: 'hundred' | 'global'
}

export const Header: FC<Props> = ({ onChange, onChangeView, view }) => {
  return (
    <>
      <Heading pb='3rem'>Mario Campbell Leaderboard</Heading>
      <Box>
        <HStack w='600px'>
          <FormControl>
            <FormLabel htmlFor='event'>Event Name:</FormLabel>
            <Input
              id='event'
              type='text'
              placeholder='Enter an event name'
              onChange={onChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='view'>View:</FormLabel>
            <Select value={view} onChange={onChangeView}>
              <option value='hundred'>Top 100</option>
              <option value='global'>Global</option>
            </Select>
          </FormControl>
        </HStack>
      </Box>
    </>
  )
}
