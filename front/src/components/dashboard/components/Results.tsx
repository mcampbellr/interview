import {
  Table,
  Text,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Heading,
  Fade,
  Flex,
  Box,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { FC } from 'react'
import { User, UserResponse } from '../../../interfaces/UsersResponse'

interface Props {
  rows: UserResponse['results']
  sortOrder: number
  event?: string
  onSortChange: () => void
}

export const Results: FC<Props> = ({
  rows,
  event,
  sortOrder,
  onSortChange,
}) => {
  return (
    <>
      <Fade in={!!event}>
        <Heading>Leaderboard for {event}</Heading>
      </Fade>
      <TableContainer w='700px'>
        <Table variant='unstyled'>
          <Thead>
            <Tr>
              <Th>
                <Flex align='center'>
                  <Text mr='.5rem'>Rank</Text>
                  <Box cursor='pointer' onClick={onSortChange}>
                    {sortOrder === 1 ? (
                      <ArrowDownIcon fontSize='lg' />
                    ) : (
                      <ArrowUpIcon fontSize='lg' />
                    )}
                  </Box>
                </Flex>
              </Th>
              <Th>Gamer Name</Th>
              <Th>Profile Pic</Th>
              {event && <Th>Event</Th>}
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {!rows.length ? (
              <Tr>
                <Td textAlign='center' colSpan={4} p='3rem'>
                  No data available for {event}
                </Td>
              </Tr>
            ) : (
              rows.map((user: User) => (
                <Tr key={user._id}>
                  <Td>{user.rank}</Td>
                  <Td>{user.name}</Td>
                  <Td>
                    <Image w='50px' src={user.pic} />
                  </Td>
                  {event && <Th>{user.event}</Th>}
                  <Td>{user.score}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
