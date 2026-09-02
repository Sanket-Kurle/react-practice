
export function Tabs({ children, Buttons,ButtonContainer='menu'}){
    return(<>
<ButtonContainer>
    {Buttons}
</ButtonContainer>
{children}

   </> );
}