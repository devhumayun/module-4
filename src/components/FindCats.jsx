import { useRef } from 'react';

export default function FindCats() {
    const itemsRef = useRef(null);

    function scrollToId(itemId) {
        const map = getMap()

        const node = map.get(itemId)

        node.scrollIntoView({
            behavior: "smooth"
        })

    }

    function getMap() {
        if (!itemsRef.current) {
            itemsRef.current = new Map()
        }
        return itemsRef.current
    }

    return (
        <>
            <nav className='fixed left-1/3 right-1/3'>
                <button onClick={() => scrollToId(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToId(5)}>
                    Maru
                </button>
                <button onClick={() => scrollToId(9)}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map(cat => (
                        <li
                            key={cat.id}
                            ref={(node) => {
                                const map = getMap()
                                if (node) {
                                    map.set(cat.id, node)
                                } else {
                                    map.delete(cat.id)
                                }
                            }}
                        >
                            <img
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catList = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: 'https://placekitten.com/250/200?image=' + i
    });
}

