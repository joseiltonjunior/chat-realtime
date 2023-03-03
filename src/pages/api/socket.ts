import messageHandler from '@/utils/messageHandler'
import { Server } from 'socket.io'

export default function SocketHandler(req: any, res: any) {
  if (res.socket.server.io) {
    console.log('Socket is already running')
    res.end()
    return
  }

  const io = new Server(res.socket.server)
  res.socket.server.io = io

  const onConnection = (socket: any) => {
    messageHandler(socket)
  }

  io.on('connection', onConnection)

  console.log('Setting up socket')

  res.end()
}
