import {
    createContext,
    type JSX,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextProps {
    Gesture?: GestureType
    Spring?: SpringType
    isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextProps>({})

// обе библиотеки зависят друг от друга
const getAsyncAnimationModules = async (): Promise<
    [SpringType, GestureType]
> => {
    return await Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ])
}

export const useAnimationLibs = (): Required<AnimationContextProps> =>
    useContext(AnimationContext) as Required<AnimationContextProps>

export const AnimationPropvider = ({
    children,
}: {
    children: ReactNode
}): JSX.Element => {
    const SpringRef = useRef<SpringType>(undefined)
    const GestureRef = useRef<GestureType>(undefined)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getAsyncAnimationModules()
            .then(([Spring, Gesture]) => {
                SpringRef.current = Spring
                GestureRef.current = Gesture
                setIsLoaded(true)
            })
            .catch((e) => {
                throw new Error('Amination libs import error')
            })
    }, [])

    const value = useMemo(
        () => ({
            isLoaded,
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
        }),
        [isLoaded],
    )

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    )
}
