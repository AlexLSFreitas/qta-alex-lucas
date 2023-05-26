import {
    assertEquals,
    assertSringIncludes,
    assertArrayIncludes,

}from "https://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João','Laos','Davi','Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertSringIncludes(aluno, "José");
})