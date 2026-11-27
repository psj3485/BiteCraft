import streamlit as st

st.title("My Streamlit App")

st.write("Welcome to my application!")

name = st.text_input("Enter your name")

if name:
    st.success(f"Hello, {name}!")