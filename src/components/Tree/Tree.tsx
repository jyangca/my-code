import { a, useSpring } from '@react-spring/web'
import { ReactNode, memo, useState } from 'react'
import useMeasure from 'react-use-measure'
import usePrevious from 'hooks/usePrevious'
import { TreeIcon } from 'components'
import { Content, Frame, Title, toggle } from './Tree.style'
import { CSSObject } from 'styled-components'

type TreeProps = {
    defaultOpen?: boolean
    name: string | Element
    style: CSSObject
    children?: ReactNode | ReactNode[]
} & HTMLDivElement

const Tree = ({ children, name, style, defaultOpen = false }: TreeProps) => {
    const [isOpen, setOpen] = useState<boolean>(defaultOpen)
    const previous = usePrevious(isOpen)
    const [ref, { height: viewHeight }] = useMeasure()
    const { height, opacity, y } = useSpring({
        from: { height: 0, opacity: 0, y: 0 },
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
        },
    })

    return (
        <Frame>
            <TreeIcon
                isOpen={isOpen}
                style={{ ...toggle, opacity: children ? 1 : 0.3 }}
                onClick={() => setOpen(!isOpen)}
            />
            <Title style={style}>
                <>{name}</>
            </Title>
            <Content
                style={{
                    opacity,
                    height: isOpen && previous === isOpen ? 'auto' : height,
                }}
            >
                <a.div ref={ref} style={{ y }} children={children} />
            </Content>
        </Frame>
    )
}

export default memo(Tree)
