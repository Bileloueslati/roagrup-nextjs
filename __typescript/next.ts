import { IncomingMessage, ServerResponse } from "http"
import { GetServerSidePropsResult, PreviewData } from "next"
import { NextApiRequestCookies } from "next/dist/server/api-utils"
import { ParsedUrlQuery } from "querystring"
import { Languages } from "./api"

export type GetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (context: GetServerSidePropsContext<Q>) => Promise<GetServerSidePropsResult<P>>

type GetServerSidePropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies
  }
  res: ServerResponse
  params?: Q
  query: ParsedUrlQuery
  preview?: boolean
  previewData?: PreviewData
  resolvedUrl: string
  locale: Languages;
  locales?: string[]
  defaultLocale?: string
}