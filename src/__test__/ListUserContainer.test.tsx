import {describe, it, vi} from 'vitest';
import {render,screen, waitFor} from "@testing-library/react";
import ListUserContainer from "../ui/ListUserContainer.tsx";


describe("test",()=>{
    const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    afterAll(() => {
        consoleMock.mockReset();
    });
    it('receives a mocked response to a REST API request', async () => {
        // expect(1+1).toBe(2

        render(<ListUserContainer />)
        // await waitForElementToBeRemoved(() =>
        //     screen.queryByLabelText('loading')
        // );
        await waitFor(()=>{
            expect(screen.getByTestId('user-name').textContent).toEqual("John Maverick")
        })

    })
})
