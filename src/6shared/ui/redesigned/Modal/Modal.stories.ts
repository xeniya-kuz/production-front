import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta = {
    title: 'shared/redesigned/Modal',
    component: Modal,

    args: {
        isOpen: true,
        children:
            'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.',
        onClose: () => {},
    },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
