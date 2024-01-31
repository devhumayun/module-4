import { useRef } from 'react';
import { cats } from '../data/data';

export default function MyCats() {
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
                {
                    cats.map((catName) => (
                        <button onClick={() => scrollToId(catName.id)} key={catName.id}>
                            {catName.name}
                        </button>

                    ))
                }
            </nav>
            <div>
                <ul>
                    {cats.map(cat => (
                        <li className='mb-10'
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
                            <img className='w-[300px] h-[300px] object-contain'
                                src={cat.image}
                                alt={'Cat #' + cat.id}
                            />
                            <span> {cat.description} </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

