import { type ChangeEvent, useEffect, useState } from 'react'
import { Box, Divider, Flex } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Results } from './components/Results'
import { Paginator } from './components/Paginator'

import type { UserResponse } from '../../interfaces/UsersResponse'

import backgroundImage from '../../assets/background.jpeg'
import { useAxios } from '../../hooks/useAxios'

export const Dashboard = () => {
  const axios = useAxios()
  const [data, setData] = useState<UserResponse | null>(null)
  const [page, setPage] = useState<number>(1)
  const [eventName, setEventName] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<number>(1)
  const [view, setView] = useState<'hundred' | 'global'>('global')

  const handlePageChange = (pageNum: number) => {
    setPage(pageNum)
  }

  const handleEventChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value)
  }

  const handleChangeView = (event: ChangeEvent<HTMLSelectElement>) => {
    setView(event.target.value as 'hundred' | 'global')
  }

  const handleSortChange = () => {
    setSortOrder(-sortOrder)
  }

  const fetchData = async () => {
    const { data: result } = await axios.get<UserResponse>(
      `/leaderboard?page=${page}&event_name=${eventName}&sort_order=${sortOrder}&view=${view}`
    )
    setData(result)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  useEffect(() => {
    fetchData()
  }, [page, eventName, sortOrder, view])

  return (
    <>
      <Box
        bgImg={backgroundImage}
        maxH='100vh'
        overflowY='scroll'
        bgPos='center'
        color='white'
      >
        <Flex bg='rgba(0,0,0,0.85)' justify='center' minH='100vh' p='5rem'>
          {data && (
            <Flex flexDir='column' align='center'>
              <Header
                onChange={handleEventChange}
                view={view}
                onChangeView={handleChangeView}
              />
              <Divider m={5} />
              <Results
                rows={data.results}
                event={eventName}
                sortOrder={sortOrder}
                onSortChange={handleSortChange}
              />
              <Paginator
                currentPage={data.page}
                lastPage={data.lastPage}
                nextPage={data.nextPage}
                onPageChange={handlePageChange}
              />
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  )
}
