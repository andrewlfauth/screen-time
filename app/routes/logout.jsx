import { redirect } from '@remix-run/node'

export async function loader() {
  return redirect('/', {
    headers: {
      'Set-Cookie': 'null',
      'Max-Age': 0,
    },
  })
}
