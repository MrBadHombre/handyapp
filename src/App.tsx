import * as Dialog from '@radix-ui/react-dialog'
import { Theme } from '@radix-ui/themes'
function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Theme>
        <Dialog.Root>
          <Dialog.Trigger>open</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>Description</Dialog.Description>
              <Dialog.Close>close</Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Theme>
    </>
  )
}

export default App
