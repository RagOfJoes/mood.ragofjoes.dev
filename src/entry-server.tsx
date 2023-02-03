import {
  StartServer,
  createHandler,
  renderAsync,
} from 'solid-start/entry-server';

const handler = createHandler(
  renderAsync((event) => <StartServer event={event} />)
);

export default handler;
