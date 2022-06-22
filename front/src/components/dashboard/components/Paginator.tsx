import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  currentPage: number
  nextPage: number
  lastPage: number
  onPageChange: (page: number) => void
}

export const Paginator: FC<Props> = ({
  nextPage,
  currentPage,
  lastPage,
  onPageChange,
}) => {
  return (
    <ButtonGroup variant='outline' mt='5'>
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </Button>
      <Flex align='center' px={5}>
        <Text>
          {currentPage}/{lastPage}
        </Text>
      </Flex>
      <Button disabled={nextPage === -1} onClick={() => onPageChange(nextPage)}>
        Next
      </Button>
    </ButtonGroup>
  )
}
