import { MockUserData } from "@/mocks/mockUserData"
import moment from "moment"
import "moment/locale/ja"

export const convertDateFromNow = (date: string = '', locale = 'ja') => {
  moment.locale(locale)
  return moment(date).fromNow()
}

export const randomUser = () => {
  return MockUserData[Math.floor(Math.random() * MockUserData.length)]
}