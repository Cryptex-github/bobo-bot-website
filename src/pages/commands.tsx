import { useState } from 'react';

import styled from 'styled-components';

type CommandObject = {
    name: string;
    args: string,
    category: string,
    description: string,
    aliases: string[],
    cooldown: string | null,
}

type CommandsResponse = {
    commands: CommandObject[];
    categories: string[];
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    box-sizing: border-box;
`

const Title = styled.h1`
    text-align: center;
`

const CategoryTitle = styled.h2`
    font-size: 30px;
    font-weight: bold;
`

const CommandContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 80vw;
`

const Command = styled.div`
    background-color: #05263d;
    border-radius: 8px;
    transition-duration: 0.2s;

    :hover {
        transform: scale(1.01);
    }
`

const CommandTitle = styled.h3`
    padding-left: 10px;
`

const CommandDescription = styled.p`
    padding-left: 10px;
`

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2vw;
    border-style: solid;
    border-width: 2px;
    border-radius: 8px;
    border-width: 1px;
    width: 10vw;
    margin: 5px 0 5px 0;
    position: relative;
    left: 2vw;
    padding-left: 1vw;
    position: sticky;
    background-color: #05263d;
    height: 100%;
`

const CategoryItem = styled.button`
    font-size: 20px;
    margin: 5px 0 5px 0;
    font-weight: bold;
    background: none;
    border: none;
    text-align: start;

    :hover {
        cursor: pointer;
    }
`

export async function getStaticProps() {
    const resp = await fetch('https://api.bobobot.cf/commands');

    return {
        props: {
            commands: await resp.json(),
        },
        revalidate: 3600,
    }
}

export default function Commands({ commands }: { commands: CommandsResponse }) {
    const [ currentCategory, setCurrentCategory ] = useState<string | null>('RTFM');

    return (
        <>
            <Title>Commands</Title>
            
            <ContentContainer>
            <CategoryContainer>
                <CategoryTitle>Categories</CategoryTitle>
                {commands.categories.map(category => {
                    return (
                        <CategoryItem key={category} onClick={() => setCurrentCategory(category)}>
                            {category}
                        </CategoryItem>
                    )
                })}
            </CategoryContainer>

            <CommandContainer>
                    {commands.commands.map(command => {
                        if (currentCategory && currentCategory === command.category) {
                            return (
                                <Command key={command.name}>
                                    <CommandTitle>
                                        {command.name} {command.args}
                                    </CommandTitle>

                                    <CommandDescription>
                                        {command.description}
                                        {command.aliases.length > 0 ? <><br/><br/></> : ''}
                                        {command.aliases.length > 0 ? `Aliases: ${command.aliases.join(', ')}` : ''}
                                        {command.aliases.length > 0 ? <br/> : ''}
                                        {command.cooldown ? `Cooldown: ${command.cooldown}` : ''}
                                    </CommandDescription>
                                </Command>
                            )
                        }
                    })}
            </CommandContainer>
            </ContentContainer>

        </>
    )
}