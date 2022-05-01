import { useEffect, useState } from "react";
import { Wrapper } from "./Wrapper";

export const Products = () => {
    const [products, setProducts] = useState({initialState: []});

    useEffect({effect: () => {
        (async () => {
            const response = await fetch({input: 'http://localhost:8000/products'});
            const content = await response.json();
            setProducts(content);
        })();
    }, deps: []});

    return <Wrapper>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1,001</td>
                        <td>random</td>
                        <td>data</td>
                        <td>placeholder</td>
                        <td>text</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Wrapper>
}