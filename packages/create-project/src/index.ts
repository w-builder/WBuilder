#!/usr/bin/env node
import { program } from 'commander'
import createProject from './createProject'

program.version('1.0.0').description('WBuilder CLI')

const packageJson = require('../package.json')

program
  .command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .description('Create a new React project')
  .action((projectName) => {
    console.log('projectName: ', projectName)
    console.log(`Creating a new WBuilder project: ${projectName}`)
    createProject(projectName)
    console.log('Project created successfully!')
  })
  .parse(process.argv)
